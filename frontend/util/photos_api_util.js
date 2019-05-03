
export const fetchPhotos = () => (
    $.ajax({
        method: "GET",
        url: "api/photos"
    })
);

export const fetchPhoto = (id) => (
    $.ajax({
        method: "GET",
        url: `api/photos/${id}`
    })
);

export const createPhoto = (photo) => {
    return ($.ajax({
            method: "POST",
            url: "api/photos",
            data: photo,
            contentType: false,
            processData: false
        })
    )
};

export const deletePhoto = (id) => (
    $.ajax({
        method: "DELETE",
        url: `api/photos/${id}`
    })
);

export const updatePhoto = (photo) => (
    $.ajax({
        method: "PATCH",
        url: `api/photos/${photo.id}`,
        data: {photo}
    })
);

export const createComment = (comment) => (
    $.ajax({
        method: "POST",
        url: `/api/photos/${comment.photo_id}/comments`,
        data: { comment }
    })
);

export const fetchComments = () => (
    $.ajax({
        method: "GET",
        url: "api/photos"
    })
)
