const products = [
    
    {id: '1' , name: 'Napoli', price: 457, category: 'Capsulas',img: 'https://www.nespresso.com/ecom/medias/sys_master/public/14460689088542/volluto-XL.png?impolicy=small&imwidth=568&imdensity=1',   stock: 25, description: 'cafe intenso'},
    {id: '2' , name: 'Tirrenia', price: 457, category: 'Capsulas', img: 'https://www.nespresso.com/ecom/medias/sys_master/public/26697849536542/cosi-XL.png?impolicy=small&imwidth=568&imdensity=1',  stock: 25, description: 'cafe intenso'},
    {id: '3' , name: 'Firenze', price: 457, category: 'Capsulas', img: 'https://www.nespresso.com/ecom/medias/sys_master/public/17183142150174/ispirazione-napoli-PLP.png?impolicy=small&imwidth=568&imdensity=1',  stock: 25, description: 'cafe intenso'},
    {id: '4' , name: 'Pisa', price: 457, category: 'Capsulas', img: 'https://www.nespresso.com/ecom/medias/sys_master/public/26699765710878/ispirazione-genova-livanto-XL.png?impolicy=small&imwidth=568&imdensity=1',   stock: 25, description: 'cafe intenso'},
    {id: '5' , name: 'Roma', price: 457, category: 'Capsulas', img: 'https://www.nespresso.com/ecom/medias/sys_master/public/15430408437790/C-0888-before-PLP-318x318px.png?impolicy=small&imwidth=568&imdensity=1',   stock: 25, description: 'cafe intenso'},
    {id: '6' , name: 'Cagliari', price: 457, category: 'Capsulas', img: 'https://www.nespresso.com/ecom/medias/sys_master/public/15414968844318/C-0887-before-PLP-318x318px.png?impolicy=small&imwidth=568&imdensity=1',   stock: 25, description: 'cafe intenso'},
    {id: '7' , name: 'GranLattisima', price: 20457, category: 'Cafeteras', img: 'https://www.nespresso.com/ecom/medias/sys_master/public/26853725143070/GranLattissimaWhite-2000x2000-min.png?impolicy=small&imwidth=568&imdensity=1',   stock: 100, description: 'cafetera simple'},
    {id: '8' , name: 'CityAdvanced', price: 20457, category: 'Cafeteras', img: 'https://www.nespresso.com/ecom/medias/sys_master/public/26846858477598/CitiZChrome-2000x2000-Front-min.png?impolicy=small&imwidth=568&imdensity=1',   stock: 100, description: 'cafetera avanzada'},
    {id: '9' , name: 'Contenedor Capsulas', price: 7600, category: 'Accesorios', img: 'https://www.nespresso.com/ecom/medias/sys_master/public/13997262077982/A-0042-2000x2000.png?impolicy=small&imwidth=568&imdensity=1',   stock: 100, description: 'cube view'},
    {id: '10' , name: 'Tazas Vidrio Nespresso', price: 9000, category: 'Accesorios', img: 'https://www.nespresso.com/ecom/medias/sys_master/public/10392977211422/A-0346-VIEW-Mug-2000X2000-2.png?impolicy=small&imwidth=568&imdensity=1',   stock: 100, description: 'tazas cafe'},
    {id: '11' , name: 'Tazas Aesthetic Nespresso', price: 8500, category: 'Accesorios', img: 'https://www.nespresso.com/ecom/medias/sys_master/public/11905775173662/A-0397-2000.png?impolicy=small&imwidth=568&imdensity=1',   stock: 100, description: 'tazas cafe'},
    {id: '12' , name: 'Recycling Bin', price: 12000, category: 'Accesorios', img: 'https://www.nespresso.com/ecom/medias/sys_master/public/12363545640990/Desktop-Standard-2000x2000.png?impolicy=small&imwidth=568&imdensity=1',   stock: 100, description: 'bolsa recicladora'},
    

]
   


export const getProducts = () => {
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}


export const getProductById = (productId) => {
    return new Promise ((resolve)=> {
        setTimeout(()=> {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}


export const getProductByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout( () =>{
            resolve(products.filter(prod=> prod.category === categoryId))
        },500)
    }
    
    )
}














