export const selectPhoto = ({ photos }, photoId) => {
    return photos[photoId] || { commentIds: [] };
};

export const selectCommentsForBench = ({ photos, comments }, photo) => {
    return photo.commentIds.map(commentId => comments[commentId]);
};

export const asArray = ({ photos }) => (
    Object.keys(photos).map(key => photos[key])
);