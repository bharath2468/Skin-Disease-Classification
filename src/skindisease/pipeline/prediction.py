import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import os



class PredictionPipeline:
    def __init__(self,filename):
        self.filename =filename


    
    def predict(self):
        ## load model
        
        model = load_model(os.path.join("model", "model.h5"))

        imagename = self.filename
        test_image = image.load_img(imagename, target_size = (224,224))
        test_image = image.img_to_array(test_image)
        test_image = np.expand_dims(test_image, axis = 0)
        result = np.argmax(model.predict(test_image), axis=1)
    
        if result[0] == 0:
            prediction = 'Cellulitis'
            return [{ "image" : prediction}]
        elif result[0] == 1:
            prediction = 'Impetigo'
            return [{ "image" : prediction}]
        elif result[0] == 2:
            prediction = 'Athlete-Foot'
            return [{ "image" : prediction}]
        elif result[0] == 3:
            prediction = 'Nail-Fungus'
            return [{ "image" : prediction}]
        elif result[0] == 4:
            prediction = 'Ringworm'
            return [{ "image" : prediction}]
        elif result[0] == 5:
            prediction = 'Cutaneous Larva Migrans'
            return [{ "image" : prediction}]
        elif result[0] == 6:
            prediction = 'Chickenpox'
            return [{ "image" : prediction}]
        elif result[0] == 7:
            prediction = 'Shingles'
            return [{ "image" : prediction}]
