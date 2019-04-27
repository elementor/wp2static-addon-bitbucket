(function( $ ) {
	'use strict';

	$(function() {
    deploy_options['bitbucket'] = {
        exportSteps: [
            'bitbucket_prepare_export',
            'bitbucket_upload_files',
            'finalize_deployment'
        ],
        required_fields: {
          ghToken: 'Please specify your Bitbucket personal access token in order to deploy to Bitbucket.',
          ghRepo: 'Please specify your Bitbucket repository name in order to deploy to Bitbucket.',
          ghBranch: 'Please specify which branch in your Bitbucket repository you want to deploy to.',
        },
        repo_field: {
          field: 'ghRepo',
          message: "Please ensure your Bitbucket repo is specified as USER_OR_ORG_NAME/REPO_NAME\n"
        }
    };

    status_descriptions['bitbucket_prepare_export'] = 'Preparing files for Bitbucket deployment';
    status_descriptions['bitbucket_upload_files'] = 'Deploying files via Bitbucket';
    status_descriptions['cloudfront_invalidate_all_items'] = 'Invalidating CloudFront cache';
  }); // end DOM ready

})( jQuery );
