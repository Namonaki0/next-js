export default function ReviewDetails({
    params
}: {
        params: {
            reviewId: string,
            productId: string
        }
    }) {
    return <h1 className="fixed inset-0 grid w-full h-full place-content-center bg-black text-white">Review id: {params.reviewId} for product {params.productId}</h1>
}