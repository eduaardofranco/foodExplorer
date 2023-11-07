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
    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState()
    const [labelName, setLabelName] = useState('Update dish Image')
    const [categoryList, setCategoryList] = useState([])
    const [data, setData] = useState(null)

    const params = useParams()

    function handleAddTag() {
        if(newTag) {
            setTags( prevState => [...prevState, newTag])
            setNewTag('')
        }
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter((tag, index) => index !== deleted))

    }
    //fetch category
    useEffect(() => {
        async function fetchCategory() {
            const categoryResponse =  await api.get('/category')
            setCategoryList(categoryResponse.data)

        }
        fetchCategory()
    }, [])

    //fecth data
    useEffect(() => {
        async function fetchData() {
            const response = await api.get(`/dishes/${params.id}`)
            setData(response.data)
        }
        fetchData()

    },[])

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
                            <Input type="file" placeholder="Select dish Image" label="Dish Image" bound="imagem" onChange={(e)=> setLabelName(e.target.value)}>
                                <label htmlFor='imagem'>{data.image}</label>
                            </Input>   
                            <Input type="text" placeholder="Ex: Ceasar Salad" label="Name" bound="name" value={data.name} />
                            <Select
                                type="select"
                                placeholder="Select dish Image"
                                label="Category"
                                bound="category"
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
                                        data.ingredients.map((ingredient, index) => (
                                            <AddIngredient
                                                value={ingredient.name}
                                                key={String(index)}
                                                onClick={() => handleRemoveTag(index)}
                                            />

                                        ))

                                    }

                                    <AddIngredient
                                        placeholder="Add"
                                        isNew
                                        onChange={e => setNewTag(e.target.value)}
                                        value={newTag}
                                        onClick={handleAddTag}
                                    />
                                </TagContent>
                            </TagContainer>
                            <Input type="number" label="Price" bound="price" placeholder="€ 00,00" value={data.price} />
                        </div>
                        <Textarea type="text" label="Description" bound="description" placeholder="Briefly talk about the dish, its ingredients and composition" value={data.description} />
                        <div className="finalize">
                            <Button className="delete" title="Delete" />
                            <Button title="Save" />

                        </div>
                    </Form>
                </main>
            }


            
        <Footer />
        </Container>
    )
}