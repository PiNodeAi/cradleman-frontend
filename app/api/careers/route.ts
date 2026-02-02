import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const careerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  position: z.string().optional(),
  resumeLink: z.string().url().optional().or(z.literal("")),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = careerSchema.parse(body);

    // TODO: integrate email/ATS workflow.
    console.log("Career application submission:", validated);

    return NextResponse.json({ message: "Application received" }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation error", details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}


