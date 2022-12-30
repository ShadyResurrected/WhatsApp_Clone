import user from "../Model/User.js";

export const addUser = async (request, response) => {
  try {
    let exist = await user.findOne({ sub: request.body.sub });
    if (exist) {
      response.status(200).json({ msg: "User already exists" });
      return;
    }

    const newUser = new user(request.body);

    // To save the user in database
    await newUser.save();
    return response.status(200).json(newUser);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};


export const getUsers = async(request,response) => {
  try {
    // Providing it with an empty object means we want to fetch all the data
    const users = await user.find({})
    return response.status(200).json(users)
  } catch (error) {
    return response.status(500).json(error.message)
  }
}