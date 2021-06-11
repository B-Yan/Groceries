package StoreProject.DTO;

import java.util.Arrays;

public class SaleDTO {
    public int id;
    public int[][] values;

    SaleDTO(int id, int[][] values){
        this.id = id;
        this.values = values;
    }

    @Override
    public String toString() {
        String val = "";
        for(int[] value : values){
            val = val + " **" + value[0] + "," + value[1] + "** ";
        }
        return "SaleDTO{" +
                "id=" + id +
                ", values=" + val +
                '}';
    }

    public int[][] getValues() {
        return this.values;
    }

    public int getId(){
        return this.id;
    }
}
