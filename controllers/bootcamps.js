const Bootcamp = require('../models/Bootcamp')
const asyncHandler = require('../middleware/async')
const ErrorResponse = require('../utils/errorResponse');
const geocoder = require('../utils/geocoder');

// @desc Get all bootcamps
// @routes GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = asyncHandler(async (req, res, next) => { 
    const bootcamp = await Bootcamp.find(req.body)
    res.status(200).json({ success: true,count: bootcamp.length, data: bootcamp })
})

// @desc Get a single bootcamp
// @routes GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = asyncHandler(async (req, res, next) => { 
    const bootcamp = await Bootcamp.findById(req.params.id)

    if(!bootcamp){
        return next(
            new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
        )
    }

    res.status(200).json({ success: true, data: bootcamp})
})

// @desc Create bootcamps
// @routes POST /api/v1/bootcamps
// @access Private
exports.createBootcamp = asyncHandler(async (req, res, next) => { 
    const bootcamp = await Bootcamp.create(req.body)
    res.status(201).json({ 
        success: true,
        data: bootcamp,
    })
})

// @desc update a bootcamp
// @routes PUT /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = asyncHandler(async (req, res, next) => { 

    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    })
    if(!bootcamp){
        return res.status(400).json({success: false})
    }

    res.status(200).json({ success: true, data: bootcamp})
})

// @desc Delete a bootcamp
// @routes  DELETE /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = asyncHandler(async (req, res, next) => { 
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)

    if(!bootcamp){
        return res.status(400).json({success: false})
    }

    res.status(200).json({ success: true, data: {}})
})

// @desc Delete a bootcamp
// @routes  DELETE /api/v1/bootcamps/:id
// @access Private
exports.getBootcampsInRadius = asyncHandler(async (req, res, next) => { 
    const { zipcode, distance } = req.params;

    // get lan/lng
    const loc = await geocoder.geocode(zipcode)
    const lat = loc[0].latitude
    const lng = loc[0].longitude

    const radius = distance/3963;
    const bootcamps = await Bootcamp.find({
        location: { $geoWithin: { $centerSphere: [[ lng,lat ], [ radius ]]}}
    })
    
    res.status(200).json({
        success: true,
        count: bootcamps.length,
        data: bootcamps
    })
})