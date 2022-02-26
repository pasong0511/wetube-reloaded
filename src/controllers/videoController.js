let videos = [
    {
        title: "First Video",
        rating: 5,
        comment: 2,
        createdAt: "2 minites ago",
        views: 1,
        id: 1,
    },
    {
        title: "Second Video",
        rating: 5,
        comment: 2,
        createdAt: "2 minites ago",
        views: 59,
        id: 2,
    },
    {
        title: "Third Video",
        rating: 5,
        comment: 2,
        createdAt: "2 minites ago",
        views: 59,
        id: 3,
    },
];


export const trending = (req, res) => {
    return res.render("home", { pageTitle: "Home", videos });
}
export const watch = (req, res) => {
    const { id } = req.params;       //const id = req.parmas.id;과 동일
    const video = videos[id - 1];     //비디오 인덱스

    return res.render("watch", { pageTitle: `Watching ${video.title}`, video });
}
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload Video");
export const deleteVideo = (req, res) => res.send("Delete Video");