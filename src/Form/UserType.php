<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('fullname',TextType::class, array(
                'label' => 'Votre Nom & prénom',
                'attr'=>array('class'=>'form-control','placeholder'=>'Nom & prénom')
            ))
            
            ->add('email',EmailType::class, array(
                'label' => 'Votre Email',
                'attr'=>array('class'=>'form-control','placeholder'=>'Email')
            ))
            ->add('password',PasswordType::class, array(
                'label' => 'Mot de passe',
                'attr'=>array('class'=>'form-control','placeholder'=>'Mot de passe')
            ))
            ->add('phone',NumberType::class, array(
                'label' => 'Votre Numéro de téléphone',
                'attr'=>array('class'=>'form-control','placeholder'=>'Numéro de téléphone')
            ))
            ->add('address',TextType::class, array(
                'label' => 'Votre adresse',
                'attr'=>array('class'=>'form-control','placeholder'=>'Adresse')
            ))
            
            
            
            


        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
