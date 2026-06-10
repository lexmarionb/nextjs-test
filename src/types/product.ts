export type Category = {
    slug: string
    name: string
    url: string
}

export type Dimension = {
    width: number
    height: number
    depth: number
}

export type Review = {
    rating: number
    comment: string
    date: Date
    reviewerName: string
    reviewerEmail: string
}

export type Meta = {
    createdAt: Date
    updatedAt: Date
    barcode: string
    qrCode: string
}

export type Product = {
    id: number
    title: string
    description: string
    category: string
    price: number
    discountPercentage: number
    rating: number
    stocks: number
    tags: string[]
    brand: string
    sku: string
    weight: number
    dimensions: Dimension
    warrantyInformation: string
    shippingInformation: string
    availabilityStatus: string
    reviews: Review[]
    returnPolicy: string
    minimumOrderQuantity: number
    meta: Meta
    thumbnail: string
    images: string[]
}