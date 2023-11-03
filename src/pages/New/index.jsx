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

export function New() {
    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState()
    const [categoryList, setCategoryList] = useState([])
    const [errorMessage, setErrorMessage] = useState('');
    const [modalMessage, setModalMessage] = useState({ message: '', title: ''})

    const [image, setImage] = useState('')
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
        const inputValue = e.target.value
        setLabelName(inputValue)
        setImage(inputValue)
    }

    async function handleNewDish(e) {
        e.preventDefault()

        if(!image) {
            setErrorMessage('Please, select a image');
            return
        }
        if(!name) {
            setErrorMessage('Name is required');
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
         //clear the message before caling it again
        setModalMessage({ title: 'Processing', message: 'Creating user...' });

        await api.post('/dishes', {
            image,
            name,
            ingredients,
            price,
            description,
            category
            
        })
        .then(() => {
            setModalMessage({ title: 'Sucess', message: 'Dish created!', navigate: '/'})
        })
        .catch(error => {
            if(error.response) {
                return setModalMessage({ title: 'Error', message: error.response.data.message})
            }
            else {
                return setModalMessage({ title: 'Error', message: 'Error registering dish'})
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
            <Header isAdmin />
            <main className='content'>
                <ButtonText to="/" title="Back" />
                <Title title="New Dish" />
                 {/* if there is a error message, show it */}
                 {errorMessage !== '' && (
                    <ValidationMessage message={errorMessage} />
                )}
                <Form>
                    <div className="line">
                        <Input
                            type="file"
                            placeholder="Select dish Image"
                            label="Dish Image" bound="imagem"
                            onChange={handleImg}>
                                <label htmlFor='imagem'>{labelName}</label>
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
                            onChange={(e) => setCategory(e.target.value)}
                        >
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
                    <Button title="Save" onClick={handleNewDish}/>
                </Form>
            </main>


            
        <Footer />
        <ModalMessage title={modalMessage.title} message={modalMessage.message} navigation={modalMessage.navigate} />
        </Container>
    )
}