import { Container } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ButtonText } from '../../components/ButtonText'
import { Title } from '../../components/Title'
import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'
import { AddIngredient } from '../../components/AddIngredient'
import { useState } from 'react'

export function New() {
    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState()
    const [labelName, setLabelName] = useState('Select dish image')

    function handleAddTag() {
        if(newTag) {
            setTags( prevState => [...prevState, newTag])
            setNewTag('')
        }
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter((tag, index) => index !== deleted))

    }

    const options = [
        "Main Course",
        "Starter",
        "Desert",
        "Drinks"
    ]
    return(
        <Container>
            <Header isAdmin />
            <main className='content'>
                <ButtonText to="/" title="Back" />
                <Title title="New Dish" />
                <form action="">
                    <div className="line">
                        <Input type="file" placeholder="Select dish Image" label="Dish Image" bound="imagem" onChange={(e)=> setLabelName(e.target.value)}>
                            <label htmlFor='imagem'>{labelName}</label>
                        </Input>   
                        <Input type="text" placeholder="Ex: Ceasar Salad" label="Name" bound="name" />
                        <Select type="select" placeholder="Select dish Image" label="Category" bound="category" options={options} />
                    </div>
                    <div className="line">
                        <div className="addTag">
                            <label>Ingredients</label>
                            <div className="container">
                                {
                                    tags.map((tag, index) => (
                                        <AddIngredient
                                            value={tag}
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
                            </div>
                        </div>
                        <Input type="number" label="Price" bound="price" placeholder="€ 00,00" />
                    </div>
                    <Textarea type="text" label="Description" bound="description" placeholder="Briefly talk about the dish, its ingredients and composition" />
                    <Button title="Save" />
                </form>
            </main>


            
        <Footer />
        </Container>
    )
}