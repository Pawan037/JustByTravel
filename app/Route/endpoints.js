import { https_blog, https_hotels } from "./https"

export const SearchLocation = async (search) => {
    return await https_hotels.get(`/hotels.php?location=${search}`);
}
export const HotelDetail = async (id) => {
    return await https_hotels.get(`/hotel-property.php?property_token=${id}`)
}
export const Get_Blogs = async () => {
    return await https_blog.get("/posts")
}