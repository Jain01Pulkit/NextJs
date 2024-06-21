import { notFound } from "next/navigation"

export default function ReviewDetail({ params }: { params: { productId: string, reviewId: string } }) {
    if (parseInt(params.reviewId) > 1000) {
        notFound();
    }
    return (
        <>
            <h1>Review Detail of product {params.productId} is {params.reviewId}</h1>
        </>
    )
}