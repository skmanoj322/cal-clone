import * as z from "zod"
import { CompleteUserPassword, UserPasswordModel } from "./index"

export const _UserModel = z.object({
  id: z.number().int(),
  username: z.string().nullish(),
  name: z.string().nullish(),
  email: z.string(),
})

export interface CompleteUser extends z.infer<typeof _UserModel> {
  password?: CompleteUserPassword | null
}

/**
 * UserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const UserModel: z.ZodSchema<CompleteUser> = z.lazy(() => _UserModel.extend({
  password: UserPasswordModel.nullish(),
}))
