import { ApiBody, ApiProperty } from "@nestjs/swagger";

export class PostResponseDTO {
    @ApiProperty({
        type: String,
        description: "The title of the post"
    })
    title: string;
    
    @ApiProperty({
        type: String,
        description: "The content of the post"
    })
    content: string;

    @ApiProperty({
        type: String,
        description: "The author of the post"
    })
    author: string;
    
    @ApiProperty({
        type: Date,
        description: "The creation date of the post"
    })
    createdAt: Date;
}