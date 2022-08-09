from django.http import HttpResponse
import os
from django.shortcuts import render
import logging
from django.http import JsonResponse
from django.http import FileResponse

logger = logging.getLogger(__name__)


def projectfile(request, filedir_name):
    if os.path.isfile("./Projects/" + filedir_name):
        print(filedir_name)
        try:
            file = open("./Projects/" + filedir_name, 'r')
        except Exception as e:
            return JsonResponse({'fileContent': "Unable to find file: " + filedir_name, 'fileExt' : ".txt", 'filePath' : filedir_name})
        
        try:
            text = file.readlines(15000)
        except Exception as e:
            file.close()
            return JsonResponse({'fileContent': "This binary file is not represented", 'fileExt' : ".txt", 'filePath' : filedir_name})

        filename, fileExt = os.path.splitext("./Projects/" + filedir_name)

        if filename == 'Makefile':
            fileExt = filename
        fileExt = fileExt.lower()
        file.close()
        return JsonResponse({'fileContent': text, 'fileExt' : fileExt, 'filePath' : filedir_name})

    else:
        logger.log(level=1, msg=str(filedir_name))
        path = "./Projects/" + filedir_name  # insert the path to your directory
        try:
            files = os.listdir(path)
        except Exception as e:
            return JsonResponse({'fileContent': "This binary file is not represented", 'fileExt' : ".txt", 'filePath' : filedir_name})

        types = []

        fLen = len(files)
        for i in range(fLen - 1, -1 , -1):
            if files[i] == ".DS_Store" or files[i] == ".idea":
                files.pop(i)
                continue
            fpath = path + "/" + files[i]
            if os.path.isfile(fpath):
                types.append("file")
            else:
                types.append("dir")

        return JsonResponse({'images': files, 'filePath' : filedir_name, 'types' : types})


