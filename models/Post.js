import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		content: {
			type: String,
            max: 500,
			required: true,
		},
        img: {
            type: String,
        },
        likes: {
            type: Array,
            default: [],
        },
	},
	{ timestamps: true },
)

const Post = mongoose.model('Post', PostSchema)
export default Post
