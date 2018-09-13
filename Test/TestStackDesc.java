package com.test.desc;
import org.junit.Test;
import java.util.Stack;

/**
 * @author lorem 
 * @date 2018.9.11
 */
public class TestStackDesc {
    @Test
    public void test(){
        Stack<Integer> stack = new Stack<Integer>();
        stack.push(1);
        stack.push(3);
        stack.push(2);

        sortStackByStack(stack);
        while(!stack.isEmpty()){
            System.out.println(stack.pop());
        }
    }
    public void sortStackByStack(Stack<Integer> stack) {
        Stack<Integer> help = new Stack<Integer>();
        while(!stack.isEmpty()){
            int cur = stack.pop();
            while(!help.isEmpty() && help.peek()< cur){
                stack.push(help.pop());
            }
            help.push(cur);
        }
        while (!help.isEmpty()){
            stack.push(help.pop());
        }
    }
}
