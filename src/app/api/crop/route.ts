import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { getCollections } from "@/lib/connect";

// GET all crops (optionally filter by user_id ?user_id=...)
export async function GET(req: NextRequest) {
  try {
    const { crops } = await getCollections();
    const userId = req.nextUrl.searchParams.get("user_id");

    const query = userId ? { user_id: userId } : {};
    const allCrops = await crops.find(query).toArray();

    return NextResponse.json(allCrops, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch crops" },
      { status: 500 },
    );
  }
}

// CREATE a new crop
export async function POST(req: NextRequest) {
  try {
    const { crops } = await getCollections();
    const body = await req.json();

    if (!body.user_id || !body.crop || !body.date) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    const id = new ObjectId().toString();

    const newCrop = {
      _id: id,
      user_id: body.user_id as string,
      crop_name: body.crop as string,
      planting_date: body.date as string,
    };

    await crops.insertOne(newCrop);

    return NextResponse.json({ message: "Crop created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create crop" },
      { status: 500 },
    );
  }
}
