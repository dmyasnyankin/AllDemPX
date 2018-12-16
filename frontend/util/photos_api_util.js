

export const fetchPosts = () => (
    $.ajax({
        method: "GET",
        url: "api/photos"
    })
);

export const fetchPost = (id) => (
    $.ajax({
        method: "GET",
        url: `api/photos/${id}`
    })
);

export const createPhoto = (photo) => (
    $.ajax({
        method: "POST",
        url: "api/photos",
        data: {photo}
    })
);


