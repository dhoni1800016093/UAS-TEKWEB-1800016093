<?php

namespace App\Models;

use CodeIgniter\Model;

class Mtodo extends Model
{
   protected $table = 'list';

   public function getList($id = false)
   {
      if ($id === false) {
         return $this->findAll();
      } else {
         return $this->getWhere(['id' => $id])->getRowArray();
      }
   }

   public function insertList($data)
   {
      $query = $this->db->table($this->table)->insert($data);
      if ($query) {
         return true;
      } else {
         return false;
      }
   }

   public function updateList($data, $id)
   {
      return $this->db->table($this->table)->update($data, ['id' => $id]);
   }

   public function deleteList($id)
   {
      return $this->db->table($this->table)->delete(['id' => $id]);
   }
}