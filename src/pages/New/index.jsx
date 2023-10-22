import { Container } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ButtonText } from '../../components/ButtonText'
import { Title } from '../../components/Title'
import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'

export function New() {
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
                <ButtonText title="Back" />
                <Title title="New Dish" />
                <form action="">
                    <Input type="file" placeholder="Select dish Image" label="Dish Image" bound="imagem">
                        <label htmlFor='imagem'>Select dish image</label>
                    </Input>   
                    <Input type="text" placeholder="Ex: Ceasar Salad" label="Name" bound="name" />
                    <Select type="select" placeholder="Select dish Image" label="Category" bound="category" options={options} /> 
                    <Input type="number" label="Price" bound="price" placeholder="€ 00,00" />
                    <Textarea type="text" label="Description" bound="description" placeholder="Briefly talk about the dish, its ingredients and composition" />
                </form>
                <Button title="Save" disabled />
            </main>


            
        <Footer />
        </Container>
    )
}