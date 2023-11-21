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
import { useEffect, useState } from 'react'
import { ValidationMessage } from '../../components/ValidationMessage'
import { ModalMessage } from '../../components/ModalMessage'
import { api } from '../../services/api'
import { ProgressBar } from '../../components/ProgessBar'

export function New() {
    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState()
    const [categoryList, setCategoryList] = useState([])
    const [errorMessage, setErrorMessage] = useState('');
    const [modalMessage, setModalMessage] = useState({ message: '', title: ''})
    const [sendingdata, setSendingData] = useState(false)
    const [loadProgress, setLoadProgress] = useState(0)

    const [image, setImage] = useState({})
    const [name, setName] =useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const [labelName, setLabelName] = useState('Select dish image')

    function handleAddIngredient() {
        if(newIngredient) {
            setIngredients( prevState => [...prevState, newIngredient])
            setNewIngredient('')
        }
    }

    function handleRemoveIngredient(deleted) {
        setIngredients(prevState => prevState.filter((ingredient, index) => index !== deleted))

    }
    function handlePrice(e) {
        // Ensure the entered value is a valid number before formatting
        const newValue = parseFloat(e.target.value);
        if (!isNaN(newValue)) {
            setPrice(newValue.toFixed(2)); // Format to two decimal places
        }
    }

    function handleImg(e) {
        const inputValue = e.target.files[0]
        setLabelName(inputValue.name)
        setImage(inputValue)
    }

    async function handleCategory(e) {
        setCategory(e.target.value)
    }

    async function handleNewDish(e) {
        e.preventDefault()

        setSendingData(true)

        //if image is not selected, image is not an instance of File
        if(!(image instanceof File)) {
            setErrorMessage('Please, select a image');
            return
        }
        if(!name) {
            setErrorMessage('Name is required');
            return
        }
        if(!category) {
            setErrorMessage('Category is required');
            return
        }
        if(ingredients.length == 0) {
            setErrorMessage('Add ate least one ingredient');
            return
        }
        if(!price) {
            setErrorMessage('Please, inform a price');
            return
        }
        if(!description) {
            setErrorMessage('Please, describe the dish');
            return
        }
        
        // Create a new FormData object and append all form data fields to it
        const formData = new FormData()

        formData.append('image', image)
        formData.append('name', name)
        formData.append('category', category)
        formData.append('price', price)
        formData.append('description', description)

        // Append the ingredients array as separate fields
        ingredients.forEach((ingredient, index) => {
            formData.append(`ingredients[${index}]`, ingredient);
        });

        //set and show progressbar
        const intervalProgressBar = setInterval(() => {
            setLoadProgress((prev) => {
                const nextProgress = prev + 10;
                if (nextProgress === 110) {
                    return 10;
                }
                return nextProgress;
            })
        }, 1000);

        // Send the POST request to the server
        await api.post('/dishes', formData)
        .then(() => {
            setModalMessage({ title: 'Success', message: 'Dish created!', navigate: '/' });
            clearInterval(intervalProgressBar)
        })
        .catch((error) => {
            if (error.response) {
                return setModalMessage({ title: 'Error', message: error.response.data.message });
            } else {
                return setModalMessage({ title: 'Error', message: 'Error registering dish' });
            }
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
            { loadProgress > 10 && <ProgressBar progress={loadProgress} /> }
            <Header isAdmin />
            <main className='content'>
                <ButtonText to="/" title="Back" />
                <Title title="New Dish" />
                 {/* if there is a error message, show it */}
                 {errorMessage !== '' && (
                    <ValidationMessage message={errorMessage} />
                )}
                <Form encType="multipart/form-data">
                    <div className="line">
                        <Input
                            type="file"
                            placeholder="Select dish Image"
                            label="Dish Image"
                            bound="imagem"
                            name="image"
                            onChange={handleImg}>
                                <label htmlFor='imagem'><span>{labelName}</span></label>
                        </Input>   
                        <Input
                            type="text"
                            placeholder="Ex: Ceasar Salad"
                            label="Name"
                            bound="name"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Select
                            type="select"
                            placeholder="Select dish Category"
                            label="Category"
                            bound="category"
                            onChange={handleCategory}
                        >
                            <option>Select dish Category</option>
                            {
                                categoryList && categoryList.map(category => (
                                    <option value={category.id} key={String(category.id)}> {category.name} </option>
                                ))
                            }
                        </Select>
                    </div>
                    <div className="line">
                        <TagContainer>
                            <label>Ingredients</label>
                            <TagContent>
                                {
                                    ingredients.map((ingredient, index) => (
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
                            label="Price (€)"
                            bound="price"
                            placeholder="€ 00,00"
                            onChange={handlePrice}
                        />
                    </div>
                    <Textarea
                        type="text"
                        label="Description"
                        bound="description"
                        placeholder="Briefly talk about the dish, its ingredients and composition"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Button
                        type="submit"
                        title="Save"
                        onClick={handleNewDish}
                        disabled={loadProgress !=0 ? 'disabled' : ''} 
                    />
                </Form>
            </main>


            
        <Footer />
        <ModalMessage title={modalMessage.title} message={modalMessage.message} navigation={modalMessage.navigate} />
        </Container>
    )
}