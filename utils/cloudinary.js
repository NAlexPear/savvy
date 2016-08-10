'use strict';

const cloudinary = require( 'cloudinary' );
const config = require( './configs/cloudinary.json' );
const path = require( 'path' );
const _ = require( 'underscore' );

cloudinary.config( config );

const Cloudinary = {
    'get': function getCloudinaryImages() {
        /* eslint-disable no-console */
        cloudinary.api.resources(
            ( result ) => console.log( result )
        );
    },
    'upload': function uploadFiles( filepathArray ) {
        _( filepathArray ).each(
            ( filepath ) => cloudinary.v2.uploader.upload(
                filepath,
                { 'public_id': path.basename( filepath, path.extname( filepath ) ) }
            )
        );
    }
};

module.exports = Cloudinary;
