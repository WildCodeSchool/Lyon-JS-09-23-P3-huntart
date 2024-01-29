import { useState } from "react";

function StreetArtPost() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    photo: null,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formDataObject = new FormData();
      formDataObject.append("name", formData.name);
      formDataObject.append("description", formData.description);
      formDataObject.append("photo", formData.photo);

      const response = await fetch("http://127.0.0.1:3310/api/streetart", {
        method: "POST",
        body: formDataObject,
      });

      console.info("Réponse du serveur :", response);

      setFormData({
        name: "",
        description: "",
        photo: null,
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi de la demande :", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormData({
      ...formData,
      photo: file,
    });
  };

  console.info(formData);

  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="photo">Image:</label>
        <input
          type="file"
          name="photo"
          accept="image/*"
          onChange={handleImageChange}
        />

        <label htmlFor="name">Nom de l'oeuvre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <input type="submit" value="Poster" />
      </form>
    </div>
  );
}

export default StreetArtPost;
