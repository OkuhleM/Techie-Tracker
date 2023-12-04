const removeUserById = require("~root/actions/users/removeUserById");
const handleAPIError = require("~root/utils/handleAPIError");
const deleteUserByIdSchema = require("./schemas/deleteUserByIdSchema");

const deleteUserById = async (req, res) => {
  const { userId } = req.params;

  try {
    await deleteUserByIdSchema.validate(
      { userId },
      {
        abortEarly: false
      }
    );

    await removeUserById({
      userId
    });

    res.status(200).send();

  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = deleteUserById;