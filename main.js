import { promises as fs } from 'fs'

const path = './productos.json'

const getProducts = async () => {
    const prods = JSON.parse(await fs.readFile(path, 'utf-8'))
    console.log(prods)
}

const getProductById = async (id) => {
    const prods = JSON.parse(await fs.readFile(path, 'utf-8'))
    const producto = prods.find(prod => prod.id === id)

    if (producto)
        console.log(producto)
    else
        console.log("Producto no encontrado")

}

const addProduct = async (product) => {
    const prods = JSON.parse(await fs.readFile(path, 'utf-8'))
    const producto = prods.find(prod => prod.id === product.id)

    if (producto) {
        console.log("Producto ya agregado")
    } else {
        prods.push(product)
        //Para modificar un array, debo pisar el anterior contenido
        await fs.writeFile(path, JSON.stringify(prods))
    }

}

const updateProduct = async (id, product) => {
    const prods = JSON.parse(await fs.readFile(path, 'utf-8'))
    const indice = prods.findIndex(prod => prod.id === id)
    //0   1   2
    //[{}, {}, {}]
    if (indice != -1) {
        prods[indice].nombre = product.nombre
        //Resto de las propiedades
        await fs.writeFile(path, JSON.stringify(prods))
    } else {
        console.log("Producto no encontrado")
    }

}

const deleteProduct = async (id) => {
    const prods = JSON.parse(await fs.readFile(path, 'utf-8'))
    const producto = prods.find(prod => prod.id === id)

    if (producto) {
        await fs.writeFile(path, JSON.stringify(prods.filter(prod => prod.id != id)))
    } else {
        console.log("Producto no encontrado")
    }

}

const product1 = {nombre: "Shampoo Elvive", descri: "Aminoacidos", precio: 3000, id: "SH001", stk: 200, foto: []}
const product2 = {nombre: "Shampoo Dove", descri: "Nutritivo con Argan", precio: 5600, id: "SH002", stk: 80, foto: []}
const product3 = {nombre: "Crema Facial", descri: "Probioticos", precio: 6500, id: "CR001", stk: 120, foto: []}

//updateProduct(4, { nombre: "Pan" })
//deleteProduct(2)
getProducts()