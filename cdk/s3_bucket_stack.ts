import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'CDKS3Stack');

new s3.Bucket(stack, 'CDKBucket', {
    bucketName: 'cdk-example-bucket',
    removalPolicy: cdk.RemovalPolicy.DESTROY,
});
