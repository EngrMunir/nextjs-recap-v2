

const ProductDetailsPage = async ({params, searchParams}) => {
    const productId = await params.productId;
    return (
        <div>
            <h1 className="text-2xl text-center">Dynamic product page {productId} and {searchParams}</h1>
        </div>
    );
};

export default ProductDetailsPage;