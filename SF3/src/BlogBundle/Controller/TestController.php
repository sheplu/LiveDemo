<?php

namespace BlogBundle\Controller;

use BlogBundle\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class TestController extends Controller
{
    /**
     * @Route("/index")
     */
    public function indexAction()
    {
    	$arr = [[
    		'name' => 'Jean',
    		'age'=> 25],
    		[
    		'name' => 'Bob',
    		'age'=> 33]];
        return $this->render('BlogBundle:Test:index.html.twig', array(
            'array' => $arr,
            'date' => new \DateTime()
        ));
    }

    /**
     * @Route("/login/{id}", requirements={"id": "\d+"})
     */
    public function loginAction($id)
    {
        $em = $this->getDoctrine()->getManager();
        $user = $em->getRepository('BlogBundle:User')->find($id);

        return $this->render('BlogBundle:Test:login.html.twig', [
            'user' => $user]);
    }

}
