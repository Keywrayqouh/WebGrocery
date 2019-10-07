exports.delete = (req, res, id) => {
    Item.findByIdAndRemove(id)
        .then(items => {
            if (!items) {
                return res.status(404).send({
                    message: "Can't find " + id
                });
            }
            res.send({ message: "Deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Can't find  " + id
                });
            }
            return res.status(500).send({
                message: "Can't find " + id
            });
        });
}