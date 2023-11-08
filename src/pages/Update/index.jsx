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
import { useParams } from 'react-router-dom'

export function Update() {

    const [data, setData] = useState(null)
    const [newIngredient, setNewIngredient] = useState()
    const [categoryList, setCategoryList] = useState([])

    const [inputValues, setInputValues] = useState({
        name: '',
        ingredients: [],
        labelName: '',
        category: 0,
        price: 0,
        description: ''
    })
    
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
                    category: dish.category_id,
                    image: dish.image,
                    labelName: dish.image,
                    price: dish.price,
                    description: dish.description,
                    ingredients: dish.ingredients.map(ingredient => ingredient.name)
                })
            
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
        const inputValue = e.target.files[0]
        setInputValues({
            ...inputValues,
            image: inputValue,
            labelName: inputValue.name
        })
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

    //post update
    async function handleUpdate() {
        try{
            await api.patch('dishes')
            .where({ dish_id })
            .update({
                image: inputValues.image,
                name: inputValues.name,
                category_id: inputValues.category,
                ingredients: inputValues.ingredients,
                price: inputValues.price,
                description: inputValues.description
            })

        } catch(error) {
            if(error) {
                console.log('Error: ' +error.message)
            } else {
                console.log('Error: Failed to update')
            }
        }
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
            <Header />
            {
                data &&
                <main className='content'>
                    <ButtonText to="/" title="Back" />
                    <Title title="New Dish" />
                    <Form>
                        <div className="line">
                            <Input
                                type="file"
                                placeholder="Select dish Image"
                                label="Dish Image"
                                bound="imagem"
                                onChange={handleImg}
                                >
                                <label htmlFor='imagem'>{inputValues.labelName}</label>
                            </Input>   
                            <Input 
                                type="text" 
                                placeholder="Ex: Ceasar Salad" 
                                label="Name"
                                bound="name"
                                value={inputValues.name}
                                onChange={(e)=> setName(e.target.value)}
                            />
                            <Select
                                type="select"
                                placeholder="Select dish Image"
                                label="Category"
                                bound="category"
                                value={inputValues.category}
                                onChange={(e) => setInputValues({
                                    ...inputValues,
                                    category: e.target.value
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
                                onChange={(e) => setPrice(e.target.value)}
                                />
                        </div>
                        <Textarea
                            type="text"
                            label="Description"
                            bound="description"
                            placeholder="Briefly talk about the dish, its ingredients and composition"
                            value={inputValues.description}
                            onChange={(e) => setDescription(e.target.value)}
                            />
                        <div className="finalize">
                            <Button className="delete" title="Delete" />
                            <Button title="Save" onClick={handleUpdate} />

                        </div>
                    </Form>
                </main>
            }


            
        <Footer />
        </Container>
    )
}