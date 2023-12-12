import { Container, Form, TagContainer, TagContent } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ButtonText } from '../../components/ButtonText'
import { Title } from '../../components/Title'
import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'
import { AddIngredient } from '../../components/AddIngredient'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { useParams, useNavigate } from 'react-router-dom'
import { ModalMessage } from '../../components/ModalMessage'
import { ProgressBar } from '../../components/ProgessBar'

export function Update() {

    
    
    const [data, setData] = useState(null)
    const [newIngredient, setNewIngredient] = useState()
    const [categoryList, setCategoryList] = useState([])
    const [imageLabelName, setImageLabelName] = useState('')
    
    const [modalMessage, setModalMessage] = useState({ message: '', title: '', confirmType: false, fncConfirm: '' })
    const [loadProgress, setLoadProgress] = useState(0)
    const [sendingData, setSendingData] = useState(false)
    

    const [inputValues, setInputValues] = useState({
        name: '',
        ingredients: [],
        image: '',
        category_id: 0,
        price: 0,
        description: ''
    })
    const navigate = useNavigate()
    const params = useParams()
    const dish_id = params.id

     //fecth dish
     useEffect(() => {
        async function fetchDish() {
            try {
                const response = await api.get(`/dishes/${dish_id}`);
                const dish = response.data;
                setData(dish)

                //set the variables with dish data
                setInputValues({
                    name: dish.name,
                    category_id: dish.category_id,
                    image: dish.image,
                    price: dish.price,
                    description: dish.description,
                    ingredients: dish.ingredients.map(ingredient => ingredient.name)
                })
                setImageLabelName(dish.image)
            
            } catch (error) {
                if (error.response && error.response.data) {
                    console.error('Error response data:', error.response.data.message);
                } else if (error.message) {
                    console.error('Error message:', error.message);
                } else {
                    console.error('Unknown error:', error);
                }
            }
        }
        fetchDish()
    },[])

    //handle img, change label name when new image
    function handleImg(e) {
        const imageFile = e.target.files[0]
        if(imageFile) {
            setInputValues((prevInputValues) => ({
                ...prevInputValues,
                image: imageFile,
            }))
            setImageLabelName(imageFile.name)
        } else {
            setInputValues((prevInputValues) => ({
                ...prevInputValues,
                image: null,
            }))
        }
    }


    // add ingredient
    function handleAddIngredient() {
        if (newIngredient) {
            setInputValues(prevInputValues => ({
                ...prevInputValues,
                ingredients: [...prevInputValues.ingredients, newIngredient],
            }));
            setNewIngredient('');
        }
    }

    //remove ingredient
    function handleRemoveIngredient(deleted) {
        setInputValues(prevInputValues => ({
            ...prevInputValues,
            ingredients: prevInputValues.ingredients.filter((ingredient, index) => index !== deleted)
        }))

    }

    // update function
    async function handleUpdate(e) {
        e.preventDefault()
        setModalMessage('')

        if(!dish_id) {
            console.log('Dish not found')
            return
        }
        const formData = new FormData();

        const dishResponse = await api.get(`/dishes/${dish_id}`);
        const dish = dishResponse.data;
        const dishIngredientsDatabase = dish.ingredients.map(ingredient => ingredient.name)


        const updatedDish = {}

        //check if the fields were updated comparing fields with data in the database
        if( imageLabelName !== dish.image) {
            updatedDish['image'] = inputValues.image
        }
        if(inputValues.name !== dish.name) {
            updatedDish['name'] = inputValues.name
        }
        if(inputValues.category_id !== dish.category_id) {
            updatedDish['category_id'] = inputValues.category_id
        }
        if(JSON.stringify(inputValues.ingredients) !== JSON.stringify(dishIngredientsDatabase)) {
            updatedDish['ingredients'] = inputValues.ingredients
        }
        if(inputValues.price !== dish.price) {
            updatedDish['price'] = inputValues.price
        }
        if(inputValues.description !== dish.description) {
            updatedDish['description'] = inputValues.description
        }
        

        //Append all fields from the state object to FormData
        Object.entries(updatedDish).forEach(([key, value]) => {
            if(key === 'ingredients') {
                formData.append('ingredients', JSON.stringify(inputValues.ingredients))
            } else {
                formData.append(key, value);
            }
        });

        //check if there is any field updated
        if(Object.keys(updatedDish).length > 0) {

            try{
                setSendingData(true)
                //set and show progressbar
                const intervalProgressBar = setInterval(() => {
                    setLoadProgress((prev) => {
                        const nextProgress = prev + 10;
                        if (nextProgress === 110) {
                            return 10;
                        }
                        return nextProgress;
                    })
                }, 500);
                //patch data

                await api.patch(`dishes/update/${dish_id}` ,formData)
                .then(response => {

                    // Check if the update was successful based on the response status
                    if (response.status === 200) {
                            console.log('Dish updated successfully');
                            setModalMessage({ title: 'Sucess!', message: 'Dish Updated!', navigate: '/'})
                            clearInterval(intervalProgressBar)

                    } else {
                        console.log('Error: Failed to update -', response.data.message);
                        setModalMessage({ title: 'Failed to update!', message: response.data.message})
                    }
                })
                
            } catch (error) {
                console.error('Error updating dish:', error.message);
                setModalMessage({ title: 'Error updating dish', message: error.message})
            }

        }

    }

    const resetModal = () => {
        setModalMessage({ title: '', message: ''});
    }
    
    async function handleDelete(e) {
        e.preventDefault()
        
        const handleConfirm = () => {
            api.delete(`/dishes/${params.id}`)
            .then(() => {
                setModalMessage({ title: 'Sucess', message: 'Dish deleted sucessfully!', navigate: '/'})
            })
        }
        setModalMessage({
            title: 'Delete Dish',
            message: `Delete '${inputValues.name}' ?`,
            confirmType: true,
            fncConfirm: handleConfirm
        })

    }


    //fetch category
    useEffect(() => {
        async function fetchCategory() {
            const categoryResponse =  await api.get('/category')
            setCategoryList(categoryResponse.data)

        }
        fetchCategory()
    }, [])


    return(
        <Container>
            { loadProgress > 0 && <ProgressBar progress={loadProgress} /> }
            <Header />
            {
                data &&
                <main className='content'>
                    <ButtonText title="Back" />
                    <Title title="New Dish" />
                    <Form encType="multipart/form-data">
                        <div className="line">
                            <Input
                                type="file"
                                placeholder="Select dish Image"
                                label="Dish Image"
                                bound="imagem"
                                onChange={handleImg}
                                >
                                <label htmlFor='imagem'>{imageLabelName}</label>
                            </Input>   
                            <Input 
                                type="text" 
                                placeholder="Ex: Ceasar Salad" 
                                label="Name"
                                bound="name"
                                value={inputValues.name}
                                onChange={(e) => setInputValues({
                                    ...inputValues,
                                    name: e.target.value
                                })}
                            />
                            <Select
                                type="select"
                                placeholder="Select dish Image"
                                label="Category"
                                bound="category"
                                value={inputValues.category_id}
                                onChange={(e) => setInputValues({
                                    ...inputValues,
                                    category_id: e.target.value
                                })}
                            >
                                {
                                    categoryList && categoryList.map(category => (
                                        <option
                                            value={category.id}
                                            key={String(category.id)}
                                            >
                                            {category.name}
                                        </option>
                                    ))
                                }
                            </Select>
                        </div>
                        <div className="line">
                            <TagContainer>
                                <label>Ingredients</label>
                                <TagContent>
                                    {
                                        inputValues.ingredients.map((ingredient, index) => (
                                            <AddIngredient
                                                value={ingredient}
                                                key={String(index)}
                                                onClick={() => handleRemoveIngredient(index)}
                                            />

                                        ))

                                    }

                                    <AddIngredient
                                        placeholder="Add"
                                        isNew
                                        onChange={e => setNewIngredient(e.target.value)}
                                        value={newIngredient}
                                        onClick={handleAddIngredient}
                                    />
                                </TagContent>
                            </TagContainer>
                            <Input
                                type="number"
                                label="Price"
                                bound="price"
                                placeholder="€ 00,00"
                                value={inputValues.price}
                                onChange={(e) => setInputValues({
                                    ...inputValues,
                                    price: e.target.value
                                })}
                                />
                        </div>
                        <Textarea
                            type="text"
                            label="Description"
                            bound="description"
                            placeholder="Briefly talk about the dish, its ingredients and composition"
                            value={inputValues.description}
                            onChange={(e) => setInputValues({
                                ...inputValues,
                                description: e.target.value
                            })}
                            />
                        <div className="finalize">
                            <Button
                                className="delete"
                                title="Delete"
                                onClick={handleDelete}
                                />
                            <Button
                                title="Save"
                                onClick={handleUpdate}
                                disabled={sendingData ? 'disabled' : ''}
                            />

                        </div>
                    </Form>
                </main>
            }


            
        <Footer />
        <ModalMessage
            title={modalMessage.title}
            message={modalMessage.message}
            navigation={modalMessage.navigate}
            confirmType={modalMessage.confirmType}
            fncConfirm={modalMessage.fncConfirm}
            onModalClose={resetModal}

            />
        </Container>
    )
}