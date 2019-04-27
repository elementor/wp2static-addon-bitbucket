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
          bbToken: 'Please specify your Bitbucket personal access token in order to deploy to Bitbucket.',
          bbRepo: 'Please specify your Bitbucket repository name in order to deploy to Bitbucket.',
          bbBranch: 'Please specify which branch in your Bitbucket repository you want to deploy to.'
        },
        repo_field: {
          field: 'bbRepo',
          message: "Please ensure your Bitbucket repo is specified as USER_OR_ORG_NAME/REPO_NAME\n"
        }
    };

    status_descriptions['bitbucket_prepare_export'] = 'Preparing files for Bitbucket deployment';
    status_descriptions['bitbucket_upload_files'] = 'Deploying files to Bitbucket (progress will look slow at end if using large batch sizes)Deploying files via Bitbucket';
  }); // end DOM ready

})( jQuery );
