// @desc Get all bootcamps
// @routes GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = (req, res, next) => { 
    res
        .status(200)
        .json({ success: true, msg: "Show all bootcamps"})
}

// @desc Get a single bootcamp
// @routes GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = (req, res, next) => { 
    res
    .status(200)
    .json({ success: true, msg: `Show bootcamp ${req.params.id}`})
}

// @desc Create bootcamps
// @routes POST /api/v1/bootcamps
// @access Private
exports.createBootcamps = (req, res, next) => { 
    res
        .status(200)
        .json({ success: true, msg: `Create new bootcamp`})
}

// @desc update a bootcamp
// @routes PUT /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = (req, res, next) => { 
    res
    .status(200)
    .json({ success: true, msg: `Update a bootcamp ${req.params.id}`})
}

// @desc Delete a bootcamp
// @routes  DELETE /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = (req, res, next) => { 
    res
    .status(200)
    .json({ success: true, msg: `Delete a Bootcamp ${req.params.id}`})
}