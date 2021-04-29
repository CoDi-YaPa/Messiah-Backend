import mongoose, { Schema } from 'mongoose'

const apiSchema = new Schema({
  name: {
    type: String
  },
  bloodGroup: {
    type: String
  },
  city: {
    type: String
  },
  phonoNo: {
    type: String
  },
  email: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

apiSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      bloodGroup: this.bloodGroup,
      city: this.city,
      phonoNo: this.phonoNo,
      email: this.email,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Api', apiSchema)

export const schema = model.schema
export default model
