<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index(): Response
    {
        // Géolocaliser une adresse ip "exemple en dur"
        $ip = '82.64.109.18';
        $geoData = @unserialize(file_get_contents('http://ip-api.com/php/'. $ip));
        $country_name = $geoData['country'];

        return $this->render('home/index.html.twig', [
            'country_name' => $country_name
        ]);
    }
}
