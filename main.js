class ProductManager {
    constructor() {
        this.products = []
    }

    addProduct(product) {
        const prod = this.products.find(prod => prod.code === product.code)

        if (prod) {
            console.log("Articulo ya encontrado")
        } else {
            this.products.push(product)
        }
    }

    getProducts() {
        console.log(this.products)
    }

    getProductById(id) {
        const prod = this.products.find(prod => prod.id === id)

        if (prod) {
            console.log(prod)
        } else {
            console.log("Articulo no encontrado")
        }
    }
}

class Product {
    constructor(title, description, price, code, stock, thumbnail) {
        this.title = title
        this.description = description
        this.price = price
        this.code = code
        this.stock = stock
        this.thumbnail = thumbnail
        this.id = Product.incrementarId() 
    }
    
    static incrementarId() {
        
        if (this.idIncrement) {
            this.idIncrement++
        } else {
            this.idIncrement = 1
        }
        return this.idIncrement
    }
}

const producto1 = new Product("Shampoo Elvive", "Aminoacidos", 3000, "SH001", 200, [])
const producto2 = new Product("Shampoo Dove", "Nutritivo con Argan", 5600, "SH002", 80, [])
const producto3 = new Product("Crema Facial", "Probioticos", 6500, "CR001", 120, [])

const productManager = new ProductManager()

productManager.addProduct(producto1)
productManager.addProduct(producto2)
productManager.addProduct(producto3)

productManager.getProducts()

productManager.getProductById(2)