import mongoose,{Schema} from "mongoose";

const oauthAccountSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    provider: {
      type: String,
      enum: ["google", "github"],
      required: true,
    },

    providerAccountId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: false,
    },
  }
);

oauthAccountSchema.index(
  {
    provider: 1,
    providerAccountId: 1,
  },
  {
    unique: true,
  }
);

oauthAccountSchema.index(
  { userId: 1, provider: 1 },
  { unique: true }
);


export const OAuthAccount = mongoose.model(
  "OAuthAccount",
  oauthAccountSchema
);