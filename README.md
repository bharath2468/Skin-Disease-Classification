
# Skin Disease Classification

## Project Overview

The Skin Disease Classification project utilizes the VGG16 architecture as the base model, fine-tuned with a custom dataset comprising 8 classes of skin diseases. The goal of this project is to classify skin diseases accurately, and the model has achieved an accuracy of 81%.

## Tech Stack

- **VGG16**: Used as the base model for the classification task.
- **Flask**: Python API for serving the model.
- **MLflow**: Employed for ML model versioning and experiment tracking.
- **DVC (Data Version Control)**: Utilized for version control of datasets and machine learning pipelines.
- **Docker**: Containerization of the application for deployment.
- **AWS**: Deployment platform for the application.
- **React**: Frontend framework used to build the user interface.

## Project Structure

```
├── app/
│   ├── static/
│   ├── templates/
│   ├── main.py          # Flask API implementation
├── model/
│   ├── vgg16_finetuned.h5 # Trained model weights
│   ├── model_pipeline.py  # Pipeline for model training and evaluation
├── dvc.yaml              # DVC pipeline configuration
├── Dockerfile            # Docker configuration
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json      # React app configuration
└── README.md             # Project documentation
```

## Model Development

- **Base Model**: The VGG16 architecture was chosen for its proven effectiveness in image classification tasks. It was fine-tuned using a custom dataset with 8 classes of skin diseases.
  
- **Fine-Tuning**: The model was trained on the custom dataset, and various hyperparameters were adjusted to improve performance. The final model achieved an accuracy of 81%.

- **Versioning**: MLflow was used to keep track of different versions of the model, allowing for easy comparison and rollback if needed.

- **Data Management**: DVC was employed to manage dataset versions and track changes in the data pipeline, ensuring reproducibility.

## Deployment

- **Containerization**: The application was containerized using Docker, making it easy to deploy in any environment.
  
- **AWS Deployment**: The Dockerized application was deployed on the AWS platform, leveraging its scalability and reliability.

## Pipelines

- **Data Pipeline**: A data preprocessing pipeline was created using DVC to handle the preparation of the dataset before training.
  
- **Model Training Pipeline**: This pipeline manages the entire model training process, from data loading and preprocessing to model training and evaluation.

## Frontend

- **React App**: The frontend was developed using React, providing an intuitive user interface where users can upload images and receive predictions on the skin disease classification.

## How to Run the Project

### Prerequisites

- Docker
- AWS account
- Python 3.x
- Node.js and npm (for React app)

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/username/skin-disease-classification.git
   cd skin-disease-classification
   ```

2. **Set up the Python environment**:

   ```bash
   python3 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

3. **Run the Flask API**:

   ```bash
   cd app
   python main.py
   ```

4. **Run the React app**:

   ```bash
   cd frontend
   npm install
   npm start
   ```

5. **Deploy with Docker**:

    ### Containerization with Docker Compose

    To deploy the application using Docker Compose, follow these steps:
   

    1. **Ensure Docker and Docker Compose are installed**: Verify that both Docker and Docker Compose are installed on your system.

    2. **Create a `.env` file**: Define the environment variables required for the Docker Compose setup. Create a `.env` file in the same directory as your `docker-compose.yml` with the following content:

        ```env
        ECR_REGISTRY=your_ecr_registry
        ECR_REPOSITORY=your_ecr_repository
        IMAGE_TAG=latest
        ```

        Replace `your_ecr_registry`, `your_ecr_repository`, and `latest` with your actual ECR registry, repository, and image tag respectively.
       

    3. **Build and start the services**: Run Docker Compose to build and start the frontend and backend services.

        ```bash
        docker-compose up --build
        ```

        This command will build the Docker images and start the services as defined in the `docker-compose.yml` file. The `--build` flag ensures that the images are built according to the latest changes.

    4. **Verify the deployment**: After the services are up, you can access the frontend on `http://localhost:3000` and the backend API on `http://localhost:8080`.

    5. **Stop the services**: To stop the services, use:

        ```bash
       docker-compose down
        ```


7. Deploy on AWS

     **Push Docker images to ECR**: Ensure that the Docker images for the frontend and backend are pushed to your AWS ECR repository.

        ```bash
        docker tag frontend-image ${ECR_REGISTRY}/${ECR_REPOSITORY}:frontend-${IMAGE_TAG}
        docker tag backend-image ${ECR_REGISTRY}/${ECR_REPOSITORY}:backend-${IMAGE_TAG}
        docker push ${ECR_REGISTRY}/${ECR_REPOSITORY}:frontend-${IMAGE_TAG}
        docker push ${ECR_REGISTRY}/${ECR_REPOSITORY}:backend-${IMAGE_TAG}
        ```
     Follow AWS instructions to deploy the Docker container.

## Future Improvements

- **Improve Model Accuracy**: Explore more advanced architectures or data augmentation techniques to increase the accuracy beyond 81%.
- **Expand Dataset**: Collect more data to cover a wider variety of skin diseases.
- **Implement CI/CD**: Set up continuous integration and continuous deployment pipelines for faster iteration and deployment.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- The VGG16 architecture and related research.
- Open-source contributors of Flask, MLflow, DVC, Docker, and React.
