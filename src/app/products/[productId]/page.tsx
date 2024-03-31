export default function ProductList({
    params
} : {
    params: {
        productId: string
    }
}){
    return <h1 className="fixed inset-0 grid w-full h-full place-content-center bg-black text-white">Details about product { params.productId }</h1>
}