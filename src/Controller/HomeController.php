<?php

namespace App\Controller;

use Symfony\Component\Finder\Finder;
use App\Service\ContainerParametersHelper;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(ContainerParametersHelper $pathHelpers): Response
    {
      
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }
    #[Route('/photos', name: 'app_photos')]
    public function photos(Request $request, ContainerParametersHelper $pathHelpers): Response
    {
        $response = new Response();

        $finder = new Finder();
        // find all files in the current directory
        $finder->files()->in($pathHelpers->getApplicationRootDir().'\assets\photos');
        
        
        if ($finder->hasResults()) {
            // ...
        }
        $list = [];
        foreach ($finder as $file) {
            $absoluteFilePath = $file->getRealPath();
            $fileNameWithExtension = $file->getRelativePathname();
            array_push($list,$fileNameWithExtension);
            
            // ...
        }
        
        $response->setContent(json_encode([
            "photos" => $list
        ]));
    
        return $response;
    }
}
