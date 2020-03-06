exports.seed = function(knex) {
  // Inserts seed entries
  return knex("issues").insert([
    {
      issue_name: "Pothole",
      issue_location: "8207 High Ridge Circle",
      category: "roads",
      priority: "high",
      imgurl: "https://res.cloudinary.com/dkfch3bjb/image/upload/v1583457226/pothole-min_wmcc9j.jpg",
      issue_details:
        "I asked Domino's to come fix it but they said they're not doing that in our state yet."
    },
    {
      issue_name: "Debris on sidewalk",
      issue_location: "7723 South Lane",
      category: "debris",
      priority: "low",
      imgurl: "https://res.cloudinary.com/dkfch3bjb/image/upload/v1583457221/debris-min_qhcjf5.jpg",
      issue_details: "There are sticks and leaves all over the sidewalk here"
    },
    {
      issue_name: "Overgrown Grass",
      issue_location: "Park on Myrtle Ave",
      category: "landscape",
      priority: "low",
      imgurl: "https://res.cloudinary.com/dkfch3bjb/image/upload/v1583457228/overgrown_grass-min_fgcqry.jpg",
      issue_details:
        "The grass at this playground is getting out of control! Please schedule it to be mowed ASAP"
    },
    {
      issue_name: "Broken curb",
      issue_location: "2977 N 1412 E",
      category: "roads",
      priority: "medium",
      imgurl: "https://res.cloudinary.com/dkfch3bjb/image/upload/v1583457226/broken_curb-min_puvr1v.jpg",
      issue_details: "The curb is falling apart here and needs fixed again"
    },
    {
      issue_name: "Needs pruning",
      issue_location: "Needs pruning",
      category: "landscape",
      priority: "low",
      imgurl: "https://res.cloudinary.com/dkfch3bjb/image/upload/v1583457222/pruning-min_jjwjks.jpg",
      issue_details:
        "People walk in the road because the shrubs and trees are so overgrown here"
    },
    {
      issue_name: "Trash",
      issue_location: "8277 Newbridge Ave",
      category: "debris",
      priority: "low",
      imgurl: "https://res.cloudinary.com/dkfch3bjb/image/upload/v1583457226/trash-min_c4nlz8.jpg",
      issue_details: "Needs cleaned up"
    }
  ]);
};
