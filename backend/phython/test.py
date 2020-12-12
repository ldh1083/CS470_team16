import numpy as np
import json 
from PIL import Image
import torch
import torch.nn as nn
from torchvision import transforms
import os
import matplotlib.pyplot as plt
m = nn.Softmax(dim=1)
from utils import (
    GlobalParams,
    BlockArgs,
    BlockDecoder,
    efficientnet,
    get_model_params,
)
from model import EfficientNet, VALID_MODELS

def transform_image(image):
  """ 
  In this function, make input image to tensor to use model.
  """
  my_transforms = transforms.Compose([transforms.Resize((224, 224)), 
                                      transforms.ToTensor(), 
                                      transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),])
  timg = my_transforms(image)
  timg.unsqueeze_(0)
  return timg

def test(image):
  """
  In this function, classify input image with trained model.
  If probability is lower than 0.8, we guess it as wrong image(return -1).
  """
  x = transform_image(image)
  model.eval()
  output = model(x.to(device))
  out = m(output)
  out = out.tolist()[0]
  if (max(out)<0.80):
    print("wrong: ", max(out))
    pred = -1
  else:
    pred = out.index(max(out))
  return pred+1

def show_result(pred, image):
  """
  Show input image with a result of the test function
  """
  fig = plt.figure()
  title = 'predict: ' + str(pred)
  fig1 = fig.add_subplot(1, 1, 1)
  fig1.set_title(title)
  fig1.axis("off")
  plt.imshow(image)
  fig.tight_layout()    
  plt.show()

device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")

model_name = 'efficientnet-b0'
image_size = EfficientNet.get_image_size(model_name)
model = EfficientNet.from_pretrained(model_name, num_classes=15)

model = model.to(device)
model.load_state_dict(torch.load('/gdrive/MyDrive/CS470/Final_Proj/results/best.pt', map_location=device))



image = Image.open('/gdrive/MyDrive/CS470/Final_Proj/test_data/그림1.png').convert('RGB')
pred = test(image)
show_result(pred, image)
