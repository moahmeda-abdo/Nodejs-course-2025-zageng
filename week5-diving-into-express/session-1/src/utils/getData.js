import { faker } from '@faker-js/faker'
import fs from 'fs/promises'

 const getDataFromFile = async () => {
    try {
        const data = await fs.readFile('students.json', 'utf-8')
        return JSON.parse(data)

    } catch (error) {
        console.log(error)
    }

}


 const getFakeData = () => {

  const fakeData =  Array.from({ length: 25 } , (_ , idx)=>{
        return {
            id: idx + 1,
            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            price: faker.commerce.price(),
        }
    })

  return fakeData
}


export { getDataFromFile , getFakeData }