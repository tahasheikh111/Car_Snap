# Generated by Django 5.0.2 on 2024-05-04 18:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_remove_image_image_file_remove_image_result_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='CarPart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('image', models.URLField()),
                ('added_by', models.CharField(max_length=100)),
            ],
        ),
    ]
