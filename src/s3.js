const { S3Client, PutObjectCommand, ListObjectsV2Command} = require("@aws-sdk/client-s3");
const {v4: uuid} = require("uuid")


const s3 = new S3Client({
  region: 'us-east-2',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});
const BUCKET = process.env.BUCKET;

const uploadToS3 = async ({file,userId}) => {
    const key = `${userId}/${uuid()}`;
    
    const command = new PutObjectCommand({
      Bucket: BUCKET, 
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype
      })
      try{
        await s3.send(command);
       return {key}
      } catch(e) {
        console.log(e)
        return {error: e}
      }

      
};

const getImageKeyByUser = async(userId) => {
  /* const command = new ListObjectsV2Command */
}

module.exports = uploadToS3