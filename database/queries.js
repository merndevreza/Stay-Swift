import { hotelModel } from "@/models/hotel-model";
import connectMongo from "@/services/connectMongo";
import { replaceMongoIdInArray } from "@/utils/replaceMongoId";

export async function getAllHotels() {
   await connectMongo()
  const hotels = await hotelModel.find().lean();
  return replaceMongoIdInArray(hotels);
}
