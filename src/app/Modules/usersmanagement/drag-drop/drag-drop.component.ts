import { AfterViewInit, Component } from '@angular/core';
import * as $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.initDragAndDrop();
  }

  initDragAndDrop() {
    $('.drag').draggable({ 
      appendTo: 'body',
      helper: 'clone'
    });

    $('#modules, #dropzone1, #dropzone2').droppable({
      activeClass: 'active',
      hoverClass: 'hover',
      drop: function (e, ui) {
        var $el = $('<div class="drag"> <div class="bg-gradient-orange border"><div class="card-body"><p class="card-title text-uppercase text-muted mb-0 text-white" ><a>' + ui.helper.text() + '</a></p></div></div></div>');
        $el.draggable({ 
          appendTo: 'body',
          helper: 'clone'
        });

        // Check the source side
        var sourceSide = ui.helper.parent();
        var targetSide = $(this);
        
        // Check if the task was moved to the opposite side
        if (targetSide.attr('id') !== sourceSide.attr('id')) {
          // Remove the item from the original side
          sourceSide.find('.drag').each(function(index, element) {
            if ($(element).text() === ui.helper.text()) {
              $(element).remove();
            }
          });
        }
        
        targetSide.append($el);
      }
    });
  }
}
