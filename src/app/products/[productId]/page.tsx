import { Metadata } from "next"
export const generateMetadata = ({ params }: { params: { productId: string } }): Metadata => {
    return {
        title: `Product ${params.productId}`
    }
}

export default function ProductDetails({ params }: { params: { productId: string } }) {
    return (
        <>
            <h1>Details about Product {params.productId}</h1>
        </>
    )
}